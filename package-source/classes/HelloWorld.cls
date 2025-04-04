global virtual class HelloWorld {

    @TestVisible
    protected Integer i = 5;
    @TestVisible
    private Integer y = 5;

    global Integer getI() {
        return this.i;
    }

    global Integer getY() {
        return this.y;
    }
    global static void print() {
        System.debug('Hello World version 5!');
    }
}