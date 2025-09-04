window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('myDB', 4)
    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err)
    })
    DBOpenReq.addEventListener('success', (event) => {
        console.log('success', event.target.result)
    })
    DBOpenReq.addEventListener('upgradeneeded', (event) => {
        console.log('Old version', event.oldVersion)
        console.log('Upgrade', event)
        console.log('New version', event.newVersion)

        db = event.target.result

        if(!db.objectStoreNames.contains('users')){
            objectStore = db.createObjectStore('users',{
                keyPath:'id', autoIncrement:true
            })
        }
        db.createObjectStore('courses', {
            keyPath:'id', autoIncrement:true
        })
       
    })
})