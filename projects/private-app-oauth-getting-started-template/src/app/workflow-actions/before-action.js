function transformRequest(request) {
  return {
    webhookUrl: request.webhookUrl,
    body: JSON.stringify(request.fields),
    contentType: 'application/x-www-form-urlencoded',
    accept: 'application/json',
    httpMethod: 'POST'
  };
}

exports.main = function (event, callback) {
 return callback(transformRequest(event));
}
