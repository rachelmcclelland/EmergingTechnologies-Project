#include <stdio.h>

int main(int argc, char *argv[])
{
    // open the file
    // rb - read as a binary file
    FILE *f = fopen("../files/t10k-images-idx3-ubyte", "rb");
    __uint8_t b; //_t = type uint8 = 8 bit unassigned integer  
    int i, j;

    // read a bit at a time from the file
    for(i = 0; i < 16; i++) //first 20 bits
    {
        fread(&b, 1, 1, f);
        printf("%02x ", b);
    }

    printf("\n");
    return 0;
}