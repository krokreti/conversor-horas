export class conversor{
    chooseMethod(meth, value) {
        switch (meth) {
            case 'convert1to2':
                    return this.convert1to2(value)
            case 'convert1to3':
                    return this.convert1to3(value)
            case 'convert2to1':
                    return this.convert2to1(value)
            case 'convert2to3':
                    return this.convert2to3(value)
            case 'convert3to1':
                    return this.convert3to1(value)
            case 'convert3to2':
                    return this.convert3to2(value)
            default:
                break;
        }
    }

    convert1to2(seconds) {
        //segundos para minutos
        return (seconds/60)
    }

    convert1to3(seconds) {
        //segundos para horas
        return (seconds/3600);
    }

    convert2to1(minutos) {
        //minutos para segundos
        return (minutos * 60)
    }

    convert2to3(minutos) {
        //minutos para horas
        console.log(minutos);
        return (minutos/60)
    }

    convert3to1(horas) {
        //horas para segundos
        return (horas * 3600)

    }

    convert3to2(horas) {
        //horas para minutos
        return (horas * 60)
    }
}