var mySong=document.getElementById('mySong');
        var icon=document.getElementById('icon');

        icon.onclick=function(){
            if(mySong.paused){
                mySong.play();
                icon.src="F:/CHITKARA SEM-5/Full Front End/Music Site/Images/pause.png";
            }
            else{
                mySong.pause();
                icon.src="F:/CHITKARA SEM-5/Full Front End/Music Site/Images/play.png";
            }
        }