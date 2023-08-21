export default class Services {
  static fetchDateNow = () => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month =
      String(dateNow.getMonth() + 1).length === 1
        ? '0' + String(dateNow.getMonth() + 1)
        : String(dateNow.getMonth() + 1);
    const date =
      String(dateNow.getDate()).length === 1
        ? '0' + String(dateNow.getDate())
        : String(dateNow.getDate());
    return String(year + '-' + month + '-' + date);
  };
}
