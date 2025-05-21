function transformRequest(request) {
  return {
    webhookUrl: request.webhookUrl + '?color=' + request.fields.widgetColor.value,
    body: JSON.stringify(request.fields),
    httpMethod: 'GET'
  };
}

exports.main = function(event, callback) {
 return callback(transformRequest(event));
}