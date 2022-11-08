enum statusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f'
}

const res = {
  message: 'Платеж успешен',
  statusCode: statusCode.SUCCESS
};



// const SUCCESS = 'success'

// 1 - успех
// 'p - в процессе
// 'f - отклонен

if(res.statusCode === statusCode.SUCCESS){

}
function action(status: statusCode){

}

action(statusCode.SUCCESS);
action(1);

function compute(){
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compute()
}

