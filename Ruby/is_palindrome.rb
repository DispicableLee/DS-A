def is_palindrome(x)
    p x
    return false if x < 0
    x.digits.join.to_i == x
end

p is_palindrome(1231)