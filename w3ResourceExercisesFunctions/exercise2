function checkPalindrome(user_entry){   
    var  charString = user_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');  
        var charCount = 0;    
        if(charString==="") {  
            alert("Please enter a word!");  
            return false;  
        }     
        if ((charString.length) % 2 === 0) {  
            charCount = (charString.length) / 2;  
        } else {  
            if (charString.length === 1) {  
                alert("This is a palindrome!.");  
                return true;  
            } else {  
            charCount = (charString.length - 1) / 2;  
            }  
        }  
        for (var x = 0; x < charCount; x++) {    
            if (charString[x] != charString.slice(-1-x)[0]) {  
                alert("This is not a palindrome.");  
                return false;  
            }  
        }  
        alert("The entry is a palindrome.");  
        return true;  
