function saveDebugHistory(debug_result) {
    var debug_type = '--';
    var debug_progress = 'Unknown';
    var debugId = 'Unknown';
  
    if (debug_result.accepted == 'success') {
      debug_type = 'v2';
      debug_progress = (debug_type == 'v3') ? 'In-Progress' : 'No-Status';
      debugId = debug_result.requestedTime;
    }
  
    var history_data = { 
      'requestedTime': debug_result.requestedTime,
      'lastupdated': getCurrentDatetimeUTC(),
      'reason_for_failure': debug_result.response.translatedError.reasonForFailure,
      'error_response_code': debug_result.response.translatedError.httpResponseCode,
      'serverIp': debug_result.response.translatedError.serverIp,
      'refID': debug_result.refID,
      'requesturl': debug_result.response.translatedError.url,
     // 'pruge_type': debug_type,
     // 'purgeId': debugId,
     // 'network': purge_result.network,
     // 'Ref Error Code': debug_result.httpResponseCode,
      'raw_response': debug_result.response.translatedError,
      'token_used': debug_result.token,
      //'update_type': purge_result.update_type,
      'requestId': debug_result.requestId
    };
  
    var save_obj = {};
    var key = 'D_' + debug_result.requestId;
    save_obj[key] = history_data;
  
    chrome.storage.local.set(save_obj, function(data){
      if (debug_result.accepted == 'success' && debug_type == 'v3') {
        //createPurgeStatusChecker(purge_result);
      } 
    });
  }

  function saveDebugHistory_logs(debug_result, arr_ghostIP, arr_errorrefdata) {
    var debug_type = '--';
    var debug_progress = 'Unknown';
    var debugId = 'Unknown';
  
    if (debug_result.accepted == 'success') {
      debug_type = 'v2';
      debug_progress = (debug_type == 'v3') ? 'In-Progress' : 'No-Status';
      debugId = debug_result.requestedTime;
    }
  
    var history_data = { 
      'requestedTime': debug_result.requestedTime,
      'lastupdated': getCurrentDatetimeUTC(),
      'reason_for_failure': 'click for raw logs',
      'ghost_IP': arr_ghostIP,
      'hostname_entered': arr_errorrefdata,
      //'error_response_code': debug_result.response.translatedError.httpResponseCode,
      //'serverIp': debug_result.response.translatedError.serverIp,
      //'refID': debug_result.refID,
     // 'requesturl': debug_result.response.translatedError.url,
     // 'pruge_type': debug_type,
     // 'purgeId': debugId,
     // 'network': purge_result.network,
     // 'Ref Error Code': debug_result.httpResponseCode,
      'raw_response': debug_result.response.logLines,
      'token_used': debug_result.token,
      //'update_type': purge_result.update_type,
      'requestId': debug_result.requestId
    };
  
    var save_obj = {};
    var key = 'D_' + debug_result.requestId;
    save_obj[key] = history_data;
  
    chrome.storage.local.set(save_obj, function(data){
      if (debug_result.accepted == 'success' && debug_type == 'v3') {
        //createPurgeStatusChecker(purge_result);
      } 
    });
  }

  function saveDebugHistoryerror(debug_result) {
    var debug_type = '--';
    var debug_progress = 'Unknown';
    var debugId = 'Unknown';
  
    if (debug_result.accepted == 'success') {
      debug_type = 'v2';
      debug_progress = (debug_type == 'v3') ? 'In-Progress' : 'No-Status';
      debugId = debug_result.requestedTime;
    }
  
    var history_data = { 
      'requestedTime': debug_result.requestedTime,
      'lastupdated': getCurrentDatetimeUTC(),
      //'reason_for_failure': debug_result.response.translatedError.reasonForFailure,
      //'error_response_code': debug_result.response.translatedError.httpResponseCode,
      //'serverIp': debug_result.response.translatedError.serverIp,
      'refID': debug_result.refID,
      //'status': debug_result.response.status,
     // 'errortitle': debug_result.response.title,
     // 'pruge_type': debug_type,
     // 'purgeId': debugId,
     // 'network': purge_result.network,
     // 'Ref Error Code': debug_result.httpResponseCode,
      'raw_response': debug_result.response,
      'token_used': debug_result.token,
      //'update_type': purge_result.update_type,
      'requestId': debug_result.requestId
    };
  
    var save_obj = {};
    var key = 'D_' + debug_result.requestId;
    save_obj[key] = history_data;
  
    chrome.storage.local.set(save_obj, function(data){
      if (debug_result.accepted == 'success' && debug_type == 'v3') {
        //createPurgeStatusChecker(purge_result);
      } 
    });
  }


  function saveDebugHistoryerror_logs(debug_result, arr_ghostIP, arr_errorrefdata) {
    var debug_type = '--';
    var debug_progress = 'Unknown';
    var debugId = 'Unknown';

  
    var history_data = { 
      'requestedTime': debug_result.requestedTime,
      'lastupdated': getCurrentDatetimeUTC(),
      'reason_for_failure': 'click for raw logs',
      'ghost_IP': arr_ghostIP,
      'hostname_entered': arr_errorrefdata,
      //'error_response_code': debug_result.response.translatedError.httpResponseCode,
      //'serverIp': debug_result.response.translatedError.serverIp,
      //'refID': debug_result.refID,
      //'status': debug_result.response.status,
     // 'errortitle': debug_result.response.title,
     // 'pruge_type': debug_type,
     // 'purgeId': debugId,
     // 'network': purge_result.network,
     // 'Ref Error Code': debug_result.httpResponseCode,
      'raw_response': debug_result.response,
      'token_used': debug_result.token,
      //'update_type': purge_result.update_type,
      'requestId': debug_result.requestId
    };
  
    var save_obj = {};
    var key = 'D_' + debug_result.requestId;
    save_obj[key] = history_data;
  
    chrome.storage.local.set(save_obj, function(data){
      if (debug_result.accepted == 'success' && debug_type == 'v3') {
        //createPurgeStatusChecker(purge_result);
      } 
    });
  }
  
function onDebugSuccess(debug_result, arr_ghostIP, arr_errorrefdata) {
  chrome.runtime.sendMessage({type: "gaq", target: "Debug_req_successful", behavior: "yes"});
    //console.log ("onDebugSuccess is run")
    debug_result['accepted'] = "success";
    debug_result['requestedTime'] = getCurrentDatetimeUTC(); 
    //console.log ('req-id = ' + debug_result.response.translatedError.url)
    showListNotificationdebug("Debug Request Successful", debug_result, arr_ghostIP, arr_errorrefdata);
}
  

  function onDebugError(debug_result, arr_ghostIP, arr_errorrefdata) {
    chrome.runtime.sendMessage({type: "gaq", target: "Debug_req_successful", behavior: "no"});
    var accepted = "";
    var title = "";
   // console.log ("error is run")
    try {
      debug_result['response'] = JSON.parse(debug_result.xhr.responseText);
      var accepted = "fail";
      var title = "Translation Failed";
      _gaq.push(['_trackEvent', 'Debug_req_failure_reason', 'transaction_failed']);
     // console.log ("response error" + debug_result.response)
    } catch (err) {
      if(jQuery.isEmptyObject(arr_ghostIP)){
        debug_result['response'] = JSON.parse(debug_result.xhr.responseText)
      }
      //debug_result['response'] = {detail: 'Could not make API call, please enter a valid error ref ID'};
      var accepted = "connect-fail";
      var title = "Request Failed";
      _gaq.push(['_trackEvent', 'Debug_req_failure_reason', 'request_failed']);
    }
  
    debug_result['accepted'] = accepted;
    debug_result['requestedTime'] = getCurrentDatetimeUTC(); 
    showListNotificationdebugerror(title, debug_result, arr_ghostIP, arr_errorrefdata);
  }


function makeErrorRefReq(arr_errorrefdata, arr_ghostIP, callback) {
    chrome.storage.local.get('update_type', function(data) { 
      var update_type = data['update_type'];
      var active_token = jQuery.extend(true, {}, activatedTokenCache);
      var original_token = { desc: active_token.desc };
      var timestamp_debug = getTimeStampInUtcUrlencoded();

  
      if (jQuery.isEmptyObject(active_token)) {
        showBasicNotification('No Active Token', 'Please activate a credential', img_fail);
        callback("fail");
        return false;
      }

      if (active_token.tokentype !== "General OPEN APIs") {
        showBasicNotification('Credential Type Mismatch', 'Please activate General OPEN APIs credential', img_fail);
        callback("fail");
        return false;
      }
  
      var urlparser = document.createElement('a');
      urlparser = active_token['baseurl'];

      //set endtime for 

      if (jQuery.isEmptyObject(arr_ghostIP)){
        console.log ('no arr_ghostIP');
        chrome.runtime.sendMessage({type: "gaq", target: "Error_ref_code_translation", behavior: "processed"});
        active_token['baseurl'] = urlparser.toLocaleString() + '/diagnostic-tools/v2/errors/' + arr_errorrefdata + '/translated-error';
      }
      else {
        chrome.runtime.sendMessage({type: "gaq", target: "fetch_logs_from_ghost_IP", behavior: "processed"});
        active_token['baseurl'] = urlparser.toLocaleString() + '/diagnostic-tools/v2/ip-addresses/' + arr_ghostIP + '/log-lines?endTime=' + timestamp_debug + '&hostHeader='+ arr_errorrefdata;
    
      }
     // active_token['baseurl'] = urlparser.toLocaleString() + 'diagnostic-tools/v2/ip-addresses/104.97.15.125/log-lines?endTime=2018-07-16T03%3A01%3A38Z&clientIp=66.31.23.36&duration=30&hostHeader=www.akamaidevops.com&requestId='+ arr_errorrefdata;
      
      //var body_data = postBody(arr_urls);
  
      var auth_header = authorizationHeader({
        method: "GET",
        tokens: active_token
      });
  
      var requestId = "Debug_r" + new Date().getTime().toString();
  
      $.ajax({
        url: active_token['baseurl'],
        //contentType: "application/json",
        type: 'GET',
        //data: body_data,
        headers: { 'Authorization': auth_header },
        success: function(response, status, xhr) { 
          onDebugSuccess({
              xhr: xhr,
              status: status,
              response: response,
              token: original_token,
              refID: arr_errorrefdata,
              requestId: requestId,
            }, arr_ghostIP, arr_errorrefdata);
        },
        error: function(xhr, status, error) {
          onDebugError({
            xhr: xhr,
            status: status,
            refID: arr_errorrefdata,
            token: original_token,
            requestId: requestId
          }, arr_ghostIP, arr_errorrefdata); 
        },
        complete: function (xhr, status) {
          if (typeof callback != 'undefined') {
            callback(status);
          }
        }
      });
  
    });
}

function showListNotificationdebug(title, debug_result, arr_ghostIP, arr_errorrefdata) {

    switch (debug_result.accepted) {
      case "success":
        icon_url = img_success;
       //console.log ("Success Notificationlist is run")
       // console.log (debug_result.requestId)
       // console.log (debug_result.response.translatedError.url)
        break;
      case "fail":
        icon_url = img_fail;
        break;
      case "connect-fail":
        icon_url = img_fail;
        break;
      default:
        icon_url = img_info;
        break;
    }
  
    var obj_raw_response = debug_result.response;
    var display_items = [];
    if(jQuery.isEmptyObject(arr_ghostIP)) {
      display_fields = ['reasonForFailure', 'title'];
      for(var key in obj_raw_response.translatedError) {
        if (display_fields.indexOf(key) >= 0) {
          each_item = {title: key.capitalize(), message: obj_raw_response.translatedError[key].toString()};
          display_items.push(each_item);
        }
      }
    }
    else{
      //display_items = ["title: log fetch successful", "message: click to see more"];
      console.log (display_items);
      }

  if(jQuery.isEmptyObject(arr_ghostIP)){
    chrome.notifications.create(debug_result.requestId, {
      type: "list",
      iconUrl: icon_url,
      title: title,
      message: "",
      items: display_items
    }, function() {
      if (debug_result.accepted != 'connect-fail') { 
        if(jQuery.isEmptyObject(arr_ghostIP)) {
          saveDebugHistory(debug_result); 
        }
        else {
          saveDebugHistory_logs(debug_result, arr_ghostIP, arr_errorrefdata);
        }
      } 
    });
  }
  else {
    chrome.notifications.create(debug_result.requestId, {
      type: "basic",
      iconUrl: icon_url,
      title: title,
      message: "Log fetch successful"
    }, function() {
      if (debug_result.accepted != 'connect-fail') { 
          saveDebugHistory_logs(debug_result, arr_ghostIP, arr_errorrefdata);
      } 
    });
  }
 
  
  }

  function showListNotificationdebugerror(title, debug_result, arr_ghostIP, arr_errorrefdata) {

    switch (debug_result.accepted) {
      case "success":
        icon_url = img_success;
       // console.log ("Success Notificationlist is run")
       // console.log (debug_result.requestId)
       // console.log (debug_result.response.translatedError.url)
        break;
      case "fail":
        icon_url = img_fail;
        break;
      case "connect-fail":
        icon_url = img_fail;
        break;
      default:
        icon_url = img_info;
        break;
    }
  
    var obj_raw_response = debug_result.response;
    var display_items = [];

    display_fields = ['detail', 'title'];
    for(var key in obj_raw_response) {
      if (display_fields.indexOf(key) >= 0) {
        each_item = {title: key.capitalize(), message: obj_raw_response[key].toString()};
        display_items.push(each_item);
      }
    }

  
    chrome.notifications.create(debug_result.requestId, {
      type: "list",
      iconUrl: icon_url,
      title: title,
      message: "",
      items: display_items
    }, function() {
      if (jQuery.isEmptyObject(arr_ghostIP)){
        saveDebugHistoryerror(debug_result);
      }
      else{
        saveDebugHistoryerror_logs(debug_result, arr_ghostIP, arr_errorrefdata);
      }

    }); 
  
  }
