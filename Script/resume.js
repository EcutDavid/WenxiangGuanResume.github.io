/// <reference path="Script/jquery-1.10.2.min.js" />
/// <reference path="Script/angular.js" />

angular.module("TODO", [])
    .controller("resumeController", function ($scope) {
        $scope.placeHolderText = "Hope Job: WPF or WEB dev";

        //Display Image Stuff
        var imageSum = 3;
        var imageCounter = 1;
        var imageRefreshInterval = 5000;
        //Display Image Stuff End

        //resumeTitle Stuff
        var resumeTitleChVer = ['愿意对工作目标做出承诺',
        '可以专注于工作目标',
        '愿意开放自己的工作内容',
        '尊重每一位团队成员',
        '有做承诺以及推翻既有方案的勇气'];
        var resumeTitleEnVer = ['Willing to commit a goal',
        'Can focus on target',
        'Willing to be openness',
        'Respect others',
        'Have courage to commit'];
        $scope.resumeTitleList = resumeTitleEnVer;
        //resumeTitle Stuff End

        //Projects Stuff
        var projectChVer = ['大一：制作基于单片机与温度传感器的温度检测系统(负责软件设计)',
        '大一：四轴飞行器(参与硬件设计，主要负责软件)',
        '大二：ZIGBEE组网的环境监测系统(负责软硬件)',
        '大二：空气压缩机控制系统显示面板(负责软件)',
        '大三：运动控制系统桌面端程序(设计与编码)',
        '大三：智能家居空调控制系统移动端程序(设计与编码)',
        '大四：文本编辑器(设计与编码)',
        '大四：外语学科平台(WEB开发，参与前后端设计与编码)'];
        var projectEnVer = ['freshman year：temperature detection system(Responsible: software)',
        'freshman year：Quadcopter(Participate in HW design, mainly responsible for software)',
        'sophomore year: Network environment monitoring system based on ZIGBEE(HW and software)',
        'sophomore year: Air compressor control system display panel(software)',
        'junior year: Motion control system desktop application(design and coding)',
        'junior year:  intelligent household air conditioning control system Mobile application(design and coding)',
        'senior year: Text editor software(design and coding)',
        'senior year: Foreign language discipline platform(WEB dev, Participate coding both fore end and back end)'];
        $scope.projectList = projectEnVer;
        //Projects Stuff End

        //Slef introduce Stuff
        var slefIntroducelistChVer = ['我叫官文祥，大学主修电子信息工程专业，将会在今年6月底正式毕业。',
        '热爱开发，于大一长期进入学院实验室进行开发实践，从大一开始的寒暑假均在相关\
        的公司进行实习工作。大一和大二阶段主要为嵌入式开发的实践。经过大三的过渡，\
        开始在大四转入纯粹的软件开发（.Net为主)。',
        '热爱学习，从大一开始，除了阅读各类经典专业读物外，会在网易公开课上进行课程学习，近期在Coursera上跟课。'];
        var slefIntroducelistEnVer = ['My chinese name is Wenxiang Guan and english name is \
        david guan. majoring in EE, will be graduate in \
        the end of June.',
        'Love software development, Spend a lot of time to practise career skill in \
        college\'s laboratory in second semester of freshman year. Freshman and \
        sophomore year is mainly for the practice of embedded system development. \
        Junior year, I spend a lots of time in desktop application development. \
        senior year, mainly desktop application development and web development, \
        intern in Lindge software with a scrum team for 4 month.'];
        $scope.slefIntroducelist = slefIntroducelistEnVer;
        //Slef introduce Stuff end

        //Projects Stuff
        var skillChVer = ['C#:熟练，了解基本的CLR知识',
        'ASP.NET:四个月的编程经验',
        'JavaScript:五个月的编程经验',
        '嵌入式系统:2年经验，主要集中于嵌入式软件开发'];
        var skillEnVer = ['C#:coding experience more than 1 year, know basic knowledge about CLR',
        'ASP.NET:coding experience just 4 month',
        'JavaScript:coding experience 5 month'];
        $scope.skillList = skillEnVer;
        //Projects Stuff End

        $scope.introduceItemFontStyle = "enIntroduceItem";
        $scope.projectTitle = "Project experience";
        $scope.titleName = "Wenxiang Guan's Resume";
        changeStoryToEnVer();

        $scope.changeLanguage = function (language) {
            if (language == 'CH') {
                $scope.placeHolderText = "期望工作：WPF或WEB开发";
                $scope.projectTitle = "项目经验";
                $scope.introduceItemFontStyle = "enIntroduceItem";
                $scope.resumeTitleList = resumeTitleChVer;
                $scope.projectList = projectChVer;
                $scope.skillList = skillChVer;
                $scope.slefIntroducelist = slefIntroducelistChVer;
                if ($('#ENlogo').css('display') != 'none')
                    $('#ENlogo').fadeOut('fast', function () {
                        $('#CHlogo').fadeIn();
                    });
                $scope.introduceItemFontStyle = "chIntroduceItem";
                $('.introduveItem').css({ "font-size": "12px" });
                changeStoryToChVer();
                $scope.titleName = "官文祥的简历";
            }
            else {
                $scope.placeHolderText = "Hope Job: WPF or WEB dev";
                $scope.projectTitle = "Project experience";
                $scope.resumeTitleList = resumeTitleEnVer;
                $scope.projectList = projectEnVer;
                $scope.skillList = skillEnVer;
                $scope.slefIntroducelist = slefIntroducelistEnVer;
                if ($('#CHlogo').css('display') != 'none')
                    $('#CHlogo').fadeOut('fast', function () {
                        $('#ENlogo').fadeIn();
                    });
                $scope.introduceItemFontStyle = "enIntroduceItem";
                $('.introduveItem').css({ "font-size": "11px" });
                changeStoryToEnVer();
                $scope.titleName = "Wenxiang Guan's Resume";
            }
        }

        //Timer for change picture
        setInterval(function () {
            if (imageCounter == imageSum) {
                changeDisplayPic(imageCounter, 1);
                imageCounter = 1;
                return;
            }
            else
                changeDisplayPic(imageCounter, imageCounter + 1);
            imageCounter++;
        }, imageRefreshInterval);


        var projectRefreshInterval = 4500;
        var projectRefreshCounter = 0;
        var projectRefreshSum = 8;
        var projectRefreshDir = true;
        //Timer for change project line
        setInterval(function () {
            if (projectRefreshDir)
                ++projectRefreshCounter;
            else
                --projectRefreshCounter;
            if (projectRefreshCounter == projectRefreshSum)
            {
                projectRefreshCounter = projectRefreshSum - 1;
                projectRefreshDir = false;
            }
            if (projectRefreshCounter < 0)
            {
                projectRefreshCounter = 0;
                projectRefreshDir = true;
            }

            $('.flashLineContent').animate({ 'top': projectRefreshCounter * -28 + 4 + 'px' })
        }, projectRefreshInterval);

        function changeDisplayPic(displayNowIndex, displayReplaceIndex) {
            $('#displayImage' + displayNowIndex).fadeOut(function () {
                $('#displayImage' + displayReplaceIndex).fadeIn();
            });
        }

        function changeStoryToChVer() {
            $scope.Story1 = '大一与大二，主要研究嵌入式开发，对各类MCU(MSP430,AVR,STM32...)进行编程，并实际参与各类开发项目。主要收获：培养了严谨的编程思路与基本的代码调优/调试方法。';
            $scope.Story2 = '热爱阅读，大二通过课外阅读了解到桌面程序开发，并实际运用到开发中(与嵌入式系统通讯及控制)，技术方面，主要阅读经典书籍，如：\
            《C# in Depth》，《CLR via C#》，《Pro WPF in C#》，《Agile Principles Patterns and Practices》，《JavaScript: The Definitive Guide》等。';
            $scope.Story3 = '一直坚持着代码练习，会在博客上写一些心得总结(www.cnblogs.com/E-WALKER),使用微软TFS (davidguan.visualstudio.com),与GITHUB(github.com/EcutDavid)进行代码托管, 会在SPOJ上进行编码训练。';
            $scope.Story4 = '团队合作时，迭代开始前与团队成员仔细讨论，达成共识，是每个迭代的第一步。在独自遇到麻烦的问题时，我会首先请教google与Stack Overflow(当然，平时的积累是最重要的)。';
            $scope.Story5 = '喜欢登山与徒步，希望可以与你同行。';
            $scope.Story6 = '希望可以加入你们，一起编码，一起创造灵感！';
        }

        function changeStoryToEnVer() {
            $scope.Story1 = 'Freshman and sophomore year, mainly focus on embedded system development, coding for lot\'s of MCU (MSP430, AVR, STM32...). participate in some projects. Main harvest: cultivate the rigorous programming thinking and basic code optimize & debugging method.'
            $scope.Story2 = 'Love reading, learn desktop application development from books in sophomore year, and use this technology in project(communication with embedded system module for conrtol purpose).technical aspect, Main reading classic books, such as：\
            《C# in Depth》,《CLR via C#》,《Pro WPF in C#》,《Agile Principles Patterns and Practices》,《JavaScript: The Definitive Guide》,etc...'
            $scope.Story3 = 'In addition to reading, I also learning new knowledge in education platform(coursera). Persist in coding practise，Writing blog (www.cnblogs.com/E-WALKER), use microsoft TFS (davidguan.visualstudio.com), GITHUB(github.com/EcutDavid) as code repositories.';
            $scope.Story4 = 'Teamwork, careful discussion with team members prior to the start of the sprint, reach a consensus, is the first step in each sprint, if there is problem which cannot solved by team, I will use google and Stack Overflow to search answer.';
            $scope.Story5 = 'Be fond of mountain climbing and walkabout.';
            $scope.Story6 = 'Hope I can join you, coding together, Together to create inspiration！';
        }
    });
