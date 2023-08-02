def merge_sort(arr)
    return arr if arr.length<=1
    mid = (arr.length/2).floor()
    left = arr[0..mid]
    right = arr[mid..-1]
    p "almost"
    merge(merge_sort(arr[0...mid]), merge_sort(arr[mid..-1]))
end

def merge(left, right)
    p "in merge"
    res = []
    until left.length==0 || right.length==0 do
        res << (left.first <= right.first ? left.shift : right.shift)
    end
    res + left + right
end


p merge_sort([1,9,3,8,4,72,16])