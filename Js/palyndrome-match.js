function pally(str){
    return /^(?<l>\w)+\w?(\k<l>(?<-l>))+(?(l)(?!))$/.test(str);
}
