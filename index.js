let nepal = {
    mountains: ['Everest', 'Fish Tail', 'Annapura'],
    printWithDash: function () {
        setTimeout(() =>
            console.log(this.mountains.join(' - '))
            , 3000);
    }
}

nepal.printWithDash();