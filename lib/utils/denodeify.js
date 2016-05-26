export default function denodeify(cb) {
  return function() {
    const args = [].slice.call(arguments,0)
    return new Promise((resolve,reject) => {
      cb.apply(null, args.concat((err) => {
        if(err) reject(err)
        else resolve([].slice.call(arguments,0)[1])
      }))
    })
  }
}