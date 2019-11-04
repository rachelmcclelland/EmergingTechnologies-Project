#include <stdio.h>

int main(int argc, char *argv[])
{
    // open the file
    // rb - read as a binary file
    FILE *f = fopen("../files/t10k-images-idx3-ubyte", "rb");
    

    // read a bit at a time from the file
    for(int i = 0; i < 20; i++) //first 20 bits
    {
        fread(&, 1, 1, f);
    }

    return 0;
}