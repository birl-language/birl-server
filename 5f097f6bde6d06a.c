#include <stdio.h>
#include <math.h>

int somar(int a, int b) {
	return a + b;
}

int main (void) {
	int a, b, res;
	printf ("Entra com a e b ai cumpade!!\n");
	scanf ("%d %d", &a, &b);
	res =  somar(a, b);
	printf ("Oh o resultado ai po: %d\n", res);
	if  (res == 37) {
		printf ("É 37 anos caralho!\n");
	} else  {
		printf ("Manda o double biceps!\n");
	}
	return 0;
}
