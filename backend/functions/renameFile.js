import path from 'path'

const renameFile = (dir, newName) => {
    const splitter = path.join('a', 'a')[1]
    let newArray = dir.split(splitter)
    const extension = path.extname(newArray.at(-1))
    newArray[newArray.length - 1] = newName + extension
    const newString = newArray.join(splitter)
    return newString
}

export default renameFile