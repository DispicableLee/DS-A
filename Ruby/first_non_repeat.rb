def first_non_repeat(string)
    map = {}
    splitted = string.split("")
    splitted.each do |i|
        temp = splitted.count(i)
        map[i] = temp
    end
    map.each {|k,v| return k if v==1}
    -1
end

p first_non_repeat("leetcode")

