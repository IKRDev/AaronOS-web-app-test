/*
            connectListener is called when your webpage successfully connects to AaronOS.
            You can also add a listener for if your webpage cannot connect to aOS.
                This usually only happens when your page is being loaded outside of aOS.
                That listener's name is:
                window.aosTools_connectFailListener
        */
        window.aosTools_connectListener = function(){
            /*
                This tells AaronOS to open the app window.
                If you need to do extra things before you want the user to see the UI,
                    then do that first, and THEN run the line of code below.
            */
            aosTools.openWindow();
        }

        /*
            Since we don't know if your script loaded before aosTools.js did,
                we need to check if aosTools was already set up.
        */
        if(typeof aosTools === "object"){
            /*
                If the test above works, then we need to have aosTools.js initialize itself.
            */
            aosTools.testConnection();
        }
        /*
            if aosTools.js hasn't initialized yet,
                then it will run the above line of code on its own once it's ready.
        */
    
