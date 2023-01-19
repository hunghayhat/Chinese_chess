var AI = AI || {};
// khởi tạo trí tuệ nhân tạo
AI.init = function ()
{
  AI.treeDepth = play.depth;

};

//Hàm lượng giá
AI.evaluate = function ()
{

};
// Lấy tất cả các tướng trên bảng
AI.getMapAllMan = function (map, my) {
  var mans = [];
  for (var i = 0; i < map.length; i++) {
    for (var n = 0; n < map[i].length; n++) {
      var key = map[i][n];
      if (key && play.mans[key].my == my) {
        play.mans[key].x = n;
        play.mans[key].y = i;
        mans.push(play.mans[key]);
      }
    }
  }
  return mans;
};



// Nhận tất cả các di chuyển của quân cờ
AI.getMoves = function (map, my) {
  var manArr = AI.getMapAllMan(map, my);
  var moves = [];
  var foul = play.isFoul;
  for (var i = 0; i < manArr.length; i++) {
    var man = manArr[i];
    var val = man.bl(map);

    for (var n = 0; n < val.length; n++) {
      var x = man.x;
      var y = man.y;
      var newX = val[n][0];
      var newY = val[n][1];
      //Nếu nó không phải là một bước đi sai
      if (foul[0] != x || foul[1] != y || foul[2] != newX || foul[3] != newY) {
        moves.push([x, y, newX, newY, man.key]);
      }
    }
  }
  return moves;
};