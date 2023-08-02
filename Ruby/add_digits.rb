# function addDigits(num){
#     returned = 0
#     const digits = num.toString().split("").map(Number)
#     console.log(digits)
#     for(const i of digits) returned = returned + i
#     console.log(returned)
#     if((returned.toString().split("")).length===1){ return returned}
#     else{
#         addDigits(returned)
#     }
#     return returned
# }

def add_digits(num)
    returned = 0
    digits = num.to_s.split("").map{|i| i.to_i}
    digits.each {|x| returned = returned+x}
    p returned
    temp = returned.to_s.split("")
    return returned if temp.length==1
    add_digits(returned)
end

p add_digits(1782)