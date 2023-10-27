for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`)
    for(let j = 0; j <= 20; j++){
        console.log(`Inner Loop value: ${j} & Outer Loop value: ${i}`)
        console.log(`${i} x ${j} =`, i*j)
    }
    
}
