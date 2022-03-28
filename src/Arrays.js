/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  data = data.split(',');
  for (let i=0;i<data.length;i++)
      data[i]=Number(data[i])
  data.sort(function(a,b) {
      return a-b;
  });
  return data.join();
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
  let i=0
while (data[i]!=undefined) {
    if (data[i]>100)
    {
        data.splice(i,1)
        i-=1
    }
    i+=1
}
  return data
}
/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
  let result = []
  let len = array1.length >= array2.length ? array1.length : array2.length;
  for (let i=0;i<len;i++) {
    if (array1[i]!=NaN)
      result.push(array1[i])
    if (array2[i]!=NaN)
      result.push(array2[i])
  }
  return result
}
