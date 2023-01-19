const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //화살표 함수의 키워드 'this'는 함수가 생성될 때 'this'의 값을 나타냅니다.
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}