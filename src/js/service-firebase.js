import { initializeApp } from 'firebase/app';


export default function firebase() {
  return importFirebase().then((firebase) => {
    // Собственно инициализция firebase. Обычно что-то вроде этого:
    const app = firebase.initializeApp({
        
    })

    // возвращаем реально используемые интерфейсы:
   
  })
}

