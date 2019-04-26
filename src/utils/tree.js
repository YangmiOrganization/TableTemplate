const data = [
  { id: 1, name: 1, pid: null },
  { id: 2, name: 2, pid: 1 },
  { id: 3, name: 3, pid: 2 },
  { id: 4, name: 4, pid: null },
  { id: 5, name: 5, pid: null },
  { id: 6, name: 6, pid: 10 },
  { id: 7, name: 7, pid: 3 }
]

function toTreeData (data) {
  const parentData = data.filter(item => !item.pid)
  const childrenData = data.filter(item => item.pid)
  run(parentData)
  function run (data) {
    if (childrenData.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const parent = data[i]
        if (!parent.children) {
          parent.children = []
        }
        for (let j = 0; j < childrenData.length; j++) {
          const children = childrenData[j]
          if (children.pid === parent.id) {
            childrenData.splice(childrenData.indexOf(children), 1)
            parent.children.push(children)
            j--
          }
        }
        run(parent.children)
      }
    }
  }
  return parentData
}

export default toTreeData
