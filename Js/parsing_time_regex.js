String.prototype.toSeconds = function(){  
    var re = /^(?:(?:(\d{2}):)?(\d{2}):)?(\d{2})$/; // very confusing regex but does the job
    var reggy = re.exec(this);
    if (reggy == null) return null;
    if (reggy[2] > 59 || reggy[3] > 59) return null;
    else {
        var seconds = (3600*reggy[1]|0)+(60*reggy[2]|0)+(reggy[3]|0);
        return seconds;
        }
}

// or 

String.prototype.toSeconds=function(){
  var times = this.match(/^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/); // this regex explains a lot
  return (times) ? (+times[1] * 3600) + (+times[2] * 60) + (+times[3]) : null;
}

"00:00:00".toSeconds(); // 0
"01:02:60".toSeconds(); // 3723
"01:60:03".toSeconds(); // null
"\n00:00:00".toSeconds(); // null

// http://www.codingforums.com/javascript-programming/128474-regex-match-time-format-hh-mm-ss.html

/*
As for an explanation of the way the substitution function sent to the replace function works: 
It takes n+3 arguments where n is the number of capturing groups in the regex. 
The first argument is the entire matched string. 
Then there is one argument per capturing group, 
followed by one argument for the index of the match within the searched string, 
and finally one argument containing the searched string.


http://stackoverflow.com/questions/8318236/regex-pattern-for-hhmmss-time-string
^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$

^                   # Start of string
(?:                 # Try to match...
 (?:                #  Try to match...
  ([01]?\d|2[0-3]): #   HH:
 )?                 #  (optionally).
 ([0-5]?\d):        #  MM: (required)
)?                  # (entire group optional, so either HH:MM:, MM: or nothing)
([0-5]?\d)          # SS (required)
$    


http://stackoverflow.com/questions/6267714/regex-find-time-values
[0-9]{1,2}:[0-9]{2} (AM|PM)
\d{1,2}:\d{2} (AM|PM)