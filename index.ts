function run():string {
    const foo = 'Pon algún punto de ruptura y pulsa F5 para arrancar la depuración.'
    let bar: string
    bar = foo
    for(let n = 1; n < 10; n++) {
        bar += ' ' + n.toString()
    }
    return bar
}

const res = run()
console.log(res)
