export default class Message {
  add(user) {
    return `${user.firstName} eklendi.`
  }
  update(user) {
    return `${user.id}\'li kullanıcının bilgileri güncellendi.`
  }
  delete(user) {
    return `${user.id}\'li kullanıcı başarıyla silindi.`
  }
  checkField(fieldName) {
    return `${fieldName} alanını kontrol ediniz.`
  }
}