import { CanvasTexture } from 'three';
import { saveAs } from 'file-saver';

function exportTextureToBMP(texture, width, height) {
    
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');

    
    context.drawImage(texture.image, 0, 0, width, height);

    
    const imageData = context.getImageData(0, 0, width, height);
    const bmpData = imageDataToBMP(imageData);

    
    const blob = new Blob([bmpData], { type: 'image/bmp' });

    
    saveAs(blob, 'texture.bmp');
}

function imageDataToBMP(imageData) {
    const headerSize = 14;
    const dibHeaderSize = 40;
    const dataOffset = headerSize + dibHeaderSize;
    const fileSize = dataOffset + imageData.data.length;

    
    const header = new Uint8Array([
        0x42, 0x4D, 
        fileSize & 0xFF, (fileSize >> 8) & 0xFF, (fileSize >> 16) & 0xFF, (fileSize >> 24) & 0xFF, 
        0x00, 0x00, 0x00, 0x00, 
        dataOffset & 0xFF, (dataOffset >> 8) & 0xFF, (dataOffset >> 16) & 0xFF, (dataOffset >> 24) & 0xFF 
    ]);

    
    const dibHeader = new Uint8Array([
        dibHeaderSize, 0, 0, 0, 
        imageData.width & 0xFF, (imageData.width >> 8) & 0xFF, (imageData.width >> 16) & 0xFF, (imageData.width >> 24) & 0xFF, 
        imageData.height & 0xFF, (imageData.height >> 8) & 0xFF, (imageData.height >> 16) & 0xFF, (imageData.height >> 24) & 0xFF, 
        1, 0, 
        24, 0, 
        0, 0, 0, 0, 
        imageData.data.length & 0xFF, (imageData.data.length >> 8) & 0xFF, (imageData.data.length >> 16) & 0xFF, (imageData.data.length >> 24) & 0xFF, 
        0x13, 0x0B, 0, 0, 
        0x13, 0x0B, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0 
    ]);

    
    const bmpData = new Uint8Array(headerSize + dibHeaderSize + imageData.data.length);
    bmpData.set(header);
    bmpData.set(dibHeader, headerSize);
    bmpData.set(imageData.data, headerSize + dibHeaderSize);

    return bmpData;
}