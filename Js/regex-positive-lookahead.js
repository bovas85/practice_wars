function insertDash(num) {
    return String(num).replace
    (/([13579])(?=[13579])/g, '$1-')
}
insertDash(454793); // returns '4547-9-3'
					//			    ^ ^
					//				two odd numbers together are split with - 
// x = ([13579]) is followed by y -> (?= y)  where y = [13579]
// () = means capturing group... so -> $1 picks up the first and only capturing group