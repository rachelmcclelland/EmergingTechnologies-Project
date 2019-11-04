#include <stdio.h>
#include <stdint.h>

int main(int argc, char *argv[])
{
    // open the file
    // rb - read as a binary file
    FILE *f = fopen("../files/t10k-images-idx3-ubyte", "rb");
    uint8_t b; //_t = type uint8 = 8 bit unassigned integer  
    int i, j, k;

    // read a bit at a time from the file
    for(i = 0; i < 16; i++) //first 20 bits
    {
        fread(&b, 1, 1, f);
        printf("%02x ", b);
    }

    printf("/n");

    for(k = 0; k < 3; k++)
    {
        for(i = 0; i < 28; i++ )
        {
            for(j = 0; j < 28; j++)
            {
                fread(&b, 1, 1, f);
                printf("%s", (b > 127) ? "0" : "."); // is the current bit > 127 ( not a white space)
                
            }

            printf("\n");
        }
        printf("\n");
    }
    
    printf("\n");
    return 0;
}