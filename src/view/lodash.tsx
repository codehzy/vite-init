import { defineComponent, onMounted } from 'vue'
import _ from 'lodash'
import { logLight } from 'naive-ui/lib/log/styles'

export default defineComponent({
  name: 'Lodash',
  setup() {
    // 数组
    const chunk = () => {
      const arr = ['a', 'b', 'c', 'd']
      const iArr = _.chunk(arr, 2)
      console.log(`chunk`, iArr)
    }

    const compact = () => {
      const arr = [0, 1, false, 2, '', 3]
      const iArr = _.compact(arr)
      console.log(`compact`, iArr)
    }

    const concat = () => {
      const arr = [1]
      const iArr = _.concat(arr, 2, [3], [[4]])
      console.log(`concat`, iArr)
    }

    const difference = () => {
      const arr = [3, 2, 1]
      const arr1 = [4, 2]
      const iArr = _.difference(arr, arr1)
      console.log(`difference`, iArr)
    }

    const differenceBy = () => {
      const arr = [3.2, 4.6, 2.2]
      const arr1 = [3.3, 5.4, 2.4]
      const iArr = _.differenceBy(arr, arr1, Math.floor)
      console.log(`difference`, iArr)
    }

    const differentWith = () => {
      const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ]
      const arr = [
        {
          x: 1,
          y: 2,
        },
      ]
      const iArr = _.differenceWith(objects, arr, _.isEqual)
      console.log(`differentWith`, iArr)
    }

    const drop = () => {
      const arr = [1, 2, 3]
      const iArr = _.drop(arr, 2)
      console.log(`drop`, iArr)
    }
    const dropRight = () => {
      const arr = [1, 2, 3]
      const iArr = _.dropRight(arr, 2)
      console.log(`dropRight`, iArr)
    }

    // TODO:不太懂跟这个函数的作用
    const dropRightWhile = () => {
      const users = [
        { user: 'barney', active: true },
        { user: 'fred', active: false },
        { user: 'pebbles', active: false },
      ]

      const iArr = _.dropRightWhile(users, (ele) => {
        return !ele.active
      })
      console.log(`dropRightWhile`, iArr)
    }

    // TODO:dropWhile,不太懂这个函数的描述

    const fill = () => {
      // 注意：会改变原数组
      const arr = [1, 2, 3, 4]
      _.fill(arr, 'a', 0, arr.length)
      console.log(`fill`, arr)
    }

    // TODO:对于官方文档传参有疑问
    const findIndex = () => {
      const arr = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
      ]
      const returnIndex = _.findIndex(
        arr,
        (ele) => {
          return ele.user === 'barney'
        },
        0
      )

      console.log(`findIndex`, returnIndex)
    }

    // TODO:对于官方文档传参有疑问
    const findLastIndex = () => {
      const arr = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
      ]
      const returnIndex = _.findLastIndex(arr, (ele) => {
        return ele.user === 'pebbles'
      })

      console.log(`findLastIndex`, returnIndex)
    }

    const head = () => {
      const arr = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
      ]
      const iArr = _.head(arr)
      // const iArr = _.first(arr)
      console.log(`head`, iArr)
    }

    const flatten = () => {
      const arr = [1, [2, [3, [4]], 5]]
      const iArr = _.flatten(arr)
      console.log(`flatten`, iArr)
    }

    const flattenDeep = () => {
      const arr = [1, [2, [3, [4]], 5]]
      const iArr = _.flattenDeep(arr)
      console.log(`flattenDeep`, iArr)
    }

    const flattenDepth = () => {
      const arr = [1, [2, [3, [4]], 5]]
      const iArr = _.flattenDepth(arr, 2)
      console.log(`flattenDepth`, iArr)
    }

    const fromPairs = () => {
      const arr = [
        ['hzy', 123],
        ['nice', 12],
      ]
      const iArr = _.fromPairs(arr)
      console.log(`fromPairs`, iArr)
    }

    const indexOf = () => {
      const arr = [1, 2, 3]
      const findIndex = _.indexOf(arr, 3, 0)
      console.log(`indexOf`, findIndex)
    }

    const initial = () => {
      const arr = [1, 2, 3]
      const iArr = _.initial(arr)
      console.log(`initial`, iArr)
    }

    const intersection = () => {
      const arr = [2, 1, 3]
      const arr1 = [3, 4, 1]
      const arr2 = [4, 3, 1]
      const iArr = _.intersection(arr, arr1, arr2)
      console.log(`intersection`, iArr)
    }

    const intersectionBy = () => {
      const arr = [2.7, 1.2]
      const arr1 = [4.3, 2.1]
      const iArr = _.intersectionBy(arr, arr1, Math.floor)
      console.log(`intersectionBy`, iArr)
    }

    const intersectionWith = () => {
      const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ]
      const others = [
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ]
      const iArr = _.intersectionWith(objects, others, _.isEqual)
      console.log(`intersectionWith`, iArr)
    }

    const join = () => {
      const arr = ['a', 'b', 'c']
      const iArr = _.join(arr, '-')
      console.log(`join`, iArr)
    }

    const last = () => {
      const arr = [1, 2, 3]
      const iArr = _.last(arr)
      console.log(`last`, iArr)
    }

    const lastIndexOf = () => {
      const arr = [1, 3, 3, 3, 2, 3, 3, 3, 3]
      const iArr = _.lastIndexOf(arr, 2)
      console.log(`lastIndexOf`, iArr)
    }

    const nth = () => {
      const arr = ['a', 'b', 'c', 'd']
      const iArr = _.nth(arr, -2)
      console.log(`nth`, iArr)
    }

    // 这个方法会修改原数组
    const pull = () => {
      const arr = [1, 2, 3, 1, 2, 3]
      const iArr = _.pull(arr, 1, 2)
      console.log(`pull`, iArr)
    }

    // 这个方法会修改原数组
    // 这个方法接受的是单个值，但是这个方法只能接收数组
    const pullAll = () => {
      const arr = [1, 2, 3, 1, 2, 3]
      const iArr = _.pullAll(arr, [1])
      console.log(iArr)
      console.log(`pullAll`, iArr)
    }

    // 这个方法会修改原数组
    const pullAllBy = () => {
      const arr = [{ x: 1 }, { x: 2 }, { y: 3 }, { x: 1 }]
      const iArr = _.pullAllBy(arr, [{ x: 3 }, { x: 1 }], 'y')
      console.log(`pullAll`, iArr)
    }

    const pullAllWith = () => {
      const arr = [{ x: 1 }, { x: 2 }, { y: 3 }, { x: 1 }]
      const iArr = _.pullAllWith(arr, [{ x: 1 }], _.isEqual)
      console.log(`pullAllWith`, iArr)
    }

    const pullAt = () => {
      const arr = [5, 10, 15, 20, 30, 50]
      const iArr = _.pullAt(arr, 1, 4)
      console.log(`pullAt`, iArr)
    }

    // 这个方法会修改原数组
    const remove = () => {
      const arr = [5, 10, 15, 20, 30, 50, 3]
      const iArr = _.remove(arr, (n) => {
        return n % 5 === 0
      })
      console.log(`remove`, iArr)
    }

    const reverse = () => {
      const arr = [1, 2, 3]
      const iArr = _.reverse(arr)
      console.log(`reverse`, iArr)
    }

    const slice = () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8]
      const iArr = _.slice(arr, 1, 5)
      console.log(`slice`, iArr)
    }

    const sortedIndex = () => {
      const arr = [10, 20, 30, 40, 50, 60, 70, 80]
      const iArr = _.sortedIndex(arr, 25)
      console.log(`sortedIndex`, iArr)
    }

    const sortedIndexBy = () => {
      const arr = [
        { x: 1, y: 4 },
        { x: 2, y: 6 },
        { x: 6, y: 6 },
      ]
      const iArr = _.sortedIndexBy(arr, { x: 5, y: 5 }, (o) => {
        return o.x
      })
      console.log(`sortedIndexBy`, iArr)
    }

    const takeWhile = () => {
      const users = [
        { user: 'barney', active: false },
        { user: 'fred', active: false },
        { user: 'pebbles', active: true },
      ]
      const iArr = _.takeWhile(users, (o) => {
        return !o.active
      })
      const iArr1 = _.takeWhile(users, 'user')
      console.log(`takeWhile`, iArr)
      console.log(`takeWhile1`, iArr1)
    }

    // https://www.lodashjs.com/docs/lodash.takeWhile

    onMounted(() => {
      chunk()
      compact()
      concat()
      difference()
      differenceBy()
      differentWith()
      drop()
      dropRight()
      dropRightWhile()
      fill()
      findIndex()
      findLastIndex()
      head()
      flatten()
      flattenDeep()
      flattenDepth()
      fromPairs()
      indexOf()
      initial()
      intersection()
      intersectionBy()
      intersectionWith()
      join()
      last()
      lastIndexOf()
      nth()
      pull()
      pullAll()
      pullAllBy()
      pullAllWith()
      pullAt()
      remove()
      reverse()
      slice()
      sortedIndex()
      sortedIndexBy()
      takeWhile()
    })

    return () => (
      <>
        <div>学习Lodash</div>
      </>
    )
  },
})
