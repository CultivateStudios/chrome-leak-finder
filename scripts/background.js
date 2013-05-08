/*var pagesToWatch = [];

setInterval(function() {
	chrome.experimental.processes.getProcessInfo(pagesToWatch, true, function(processes) {
		
	});
});*/

chrome.experimental.processes.onUpdatedWithMemory.addListener(function(processes) {
	for(processId in processes) {
		var process = processes[processId];
		console.log(process);

		for(var i=0,max=process.tabs.length; i<max; i++) {
			var tabId = process.tabs[i];

			chrome.tabs.executeScript(tabId, {
				code: "memoryUpdate("+process.jsMemoryUsed+", "+process.jsMemoryAllocated+");"
			});
		}
	}
});