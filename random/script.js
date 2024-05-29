function pickRandomPerson() {
    const people = ['黄鹏宇','刘芯语','钱坤','涂诗涵','周子晟','朱方琢','王麒茗','徐亦杨','杨博涵','杨森博','余子辰','张桓玟','陈沫言','何岑立','唐梓淋','王首砚','余可婧','朱力文','董云熙','邱天澜','全淅','张芷睿','朱方勃','陈思瑞','陈玥含','刘桐语','任博怿','左浩然','包胤唐杰','陈祖卓良','郭世茂','李奕衡','赵悦彤','洪瑾涵','胡梓琪','刘浩宇','王雨泽','周煜菲','蔡梓珺','李里','彭家悦','全思睿','吴宇轩','李昱翰','孙梦涵','唐梓琪','谢沁霏','杨坤哲']; // 这里你可以添加更多的人名
    const randomIndex = Math.floor(Math.random() * people.length);
    const randomPerson = people[randomIndex];
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `抽中的人是：${randomPerson}`;
}