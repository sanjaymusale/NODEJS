var person = {
    name : 'rakesh',
    skills : ['js','py','rb'],
    getSkills : function(){
        console.log(this)
        let that = this
        this.skills.forEach(function(skill){
            console.log(`${that.name} knows ${skill}`)
        
        })
    },
}
person.getSkills()