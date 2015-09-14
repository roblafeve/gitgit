angular.module('services').service('notificationsSrvc', function(
  $http,
  $q
) {

  this.data = {};

  this.getData = function() {
    $http.get('https://api.github.com/notifications')
      .then((res) => {
        this.data.feed = res.data;
        this.data.display = angular.copy(this.data.feed);
      })
      .catch((res) => {
        console.log(res.error);
      })
  };

  this.find = function(id) {
    this.data.display = this.data.display.filter(function(item) {
      console.log(item);
      return item.last_read_at != null;
    })
  }

  this.sortByDate = function() {
    this.data.display = this.data.display.sort(function(a, b) {
      if (a.updated_at < b.updated_at)
        return -1;
      if (a.updated_at > b.updated_at)
        return 1;
      return 0;
    });
  };

  this.reset = function(id) {
    this.data.display = angular.copy(this.data.feed);
  };

  this.getData();

});
