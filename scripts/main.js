var beginningMemoryAllocated = 0;
var beginningMemoryUsed = 0;
var currentMemoryAllocated = 0;
var currentMemoryUsed = 0;

function memoryUpdate(memUsed, memAllocated) {
	if(beginningMemoryUsed === 0 && beginningMemoryAllocated === 0) {
		beginningMemoryAllocated = currentMemoryAllocated = memAllocated;
		beginningMemoryUsed = currentMemoryUsed = memUsed;



		console.log("Initial Memory", {
			"memoryAllocated": beginningMemoryAllocated,
			"memoryUsed": beginningMemoryUsed
		});
	} else {

		console.log("Memory Updated", {
			"memoryAllocated": memAllocated,
			"memoryUsed": memUsed,
			"allocatedSinceBeginning": (memAllocated - beginningMemoryAllocated),
			"allocatedSinceLast": (memAllocated - currentMemoryAllocated),
			"usedSinceBeginning": (memUsed - beginningMemoryUsed),
			"usedSinceLast": (memUsed - currentMemoryUsed)
		});

		currentMemoryUsed = memUsed;
		currentMemoryAllocated = memAllocated;
	}
}