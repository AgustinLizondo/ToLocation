import * as SQLite from 'expo-sqlite'

const dataBase = SQLite.openDatabase('userdata')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        dataBase.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS userdata (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          latitude REAL,
          longitude REAL
        )`,
                [],
                () => { resolve() },
                (_, err) => { reject(err) },
            )
        });
    })

    return promise;
}

export const insertUserData = (name, latitude, longitude) => {
    const promise = new Promise((resolve, reject) => {
        dataBase.transaction(tx => {
            tx.executeSql(
                `INSERT INTO userdata (name, latitude, longitude) VALUES (?, ?, ?)`,
                [name, latitude, longitude],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) },
            )
        })
    })

    return promise;
}

export const loadUserData = () => {
    const promise = new Promise((resolve, reject) => {
        dataBase.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM userdata',
                [],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) },
            )
        })
    })

    return promise;
}

// export const dropTable = () => {
//     const promise = new Promise((resolve, reject) => {
//         dataBase.transaction(tx => {
//             tx.executeSql(
//                 'DROP TABLE userdata',
//                 [],
//                 (_, result) => { resolve(result) },
//                 (_, err) => { reject(err) },
//             )
//         })
//     })

//     return promise;
// }