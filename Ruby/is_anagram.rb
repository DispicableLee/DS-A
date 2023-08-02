def is_anagram(word1, word2)
    map1 = {}
    map2 = {}
    return false if word1.length != word2.length
    (0..word1.length-1).each do |i|
        map1[word1[i]] = word1.split("").count(word1[i])
        map2[word2[i]] = word2.split("").count(word2[i])
    end
     map1 == map2
end


p is_anagram("cat", "tac")