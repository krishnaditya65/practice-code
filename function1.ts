function incrementalBackUps(lastBackUpTime: number, changes: number[][]): number[]{
const fileToUpdate: number[] = [];
    for(let i=0; i<changes.length; i++)
        {
            if(changes[i][0] > lastBackUpTime){
                if(!fileToUpdate.includes(changes[i][1])){
                    fileToUpdate.push(changes[i][1]);
                }
            }

        }
        return fileToUpdate.sort((fileId1, fileId2) => fileId1 - fileId2);
}