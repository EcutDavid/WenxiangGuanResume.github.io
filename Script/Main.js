angular.module("TODO", [])
    .controller("controller", function ($scope) {
        $scope.name = "Guan";
        $scope.todoList = [{ name: "备案", description: "提交身份证照片，"},
        { name: "Pro Angular JS", description: "两章，阅读加练习"},
        { name: "Cracking the Coding Interview", description: "3小时的Coding练习。。" },
        { name: "Check 51JOB", description: "检查。。。"}];

        $scope.submit = function () {
            $scope.todoList.push({ name: $scope.nameInputText, description: $scope.descriptionInputText });
        }
    });