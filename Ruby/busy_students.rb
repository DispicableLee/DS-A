def busy_students(start_times, end_times, given_time)
    count = 0
    start_times.each.with_index do |x, i|
        p "start at #{x}"
        end_time = end_times[i]
        (x..end_time).each do |time|
            count+=1 if time==given_time
        end
        p "end at #{end_time}"
    end
    count
end

k = [9,8,7,6,5,4,3,2,1]
j = [10,10,10,10,10,10,10,10,10]

p busy_students(k,j,5)