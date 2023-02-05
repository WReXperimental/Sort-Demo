export function isNumber(element) {
  return element === +element;
}

export function isString(element) {
  return typeof element === "String";
}

console.log("a");
// 一个文件被引用多次，但是所有的操作只会进行1次，
// import的时候如果被执行过一次，那么再次引用的时候不会再执行一次
// 所有的引用只会被操作一遍，我们分成多个文件是方便看，系统最后会把他们都变成一份文件

const list = [24, 456, 5849, 123, 156];
const list2 = [456, "ffawf", [486, 89], [[[55]], "48"], 456, 456];

export function mySort(sortList) {
  const flatList = sortList.flat(Infinity);
  // 用.flat 把数组扁平化，让所有的数都被拆到只有一层数组
  console.log(flatList);

  const filterList = flatList.filter((element) => isNumber(+element));
  // 用.filter 把不能变成数字的筛选出来，如果是字符串型数字，那么在isNumber的变量前面加“+”加号，就可以把字符型数字留下
  console.log(filterList);

  const setList = [...new Set(filterList)];
  // 用set（）来剔除重复的数字，set是个集合，集合里没有重复的数
  console.log(setList);

  const mapList = setList.map((element) => +element);
  // .map()是对数组进行变形操作，可以element*2，得到数值为两倍的数组，在这里用“+”， 来把字符型数字，变成数组
  console.log(mapList);

  mapList.sort((a, b) => a - b);
  // 从小到大排序
  console.log(mapList);

  mapList.sort((a, b) => b - a);
  // 从大到小排序
  console.log(mapList);
}

mySort(list2);
