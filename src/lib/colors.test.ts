import { hexToRGB } from "./colors";

describe("hexToRGB", () => {
    describe("should throw errors when", () => {
        test("length is incorrect", () => {
            expect(() => hexToRGB("#abde")).toThrow()
            expect(() => hexToRGB("#ab")).toThrow()
            expect(() => hexToRGB("abddedf")).toThrow()
        })

        test("contains non-hex characters", () => {
            expect(() => hexToRGB("qwertyu")).toThrow(/valid hex value/)
            
        })     
    })

    describe("should give the correct solution", () => {
        describe("with 6 digits", () => {
            test("with initial #", () => {
                expect(hexToRGB("#0C0D0E")).toEqual({ r: 12, g: 13, b: 14 })
            })
    
            test("without initial #", () => {
                expect(hexToRGB("0CFF13")).toEqual({ r: 12, g: 255, b: 19 })
            })
            test("with only numbers", () => {
                expect(hexToRGB("123356")).toEqual({ r: 18, g: 51, b: 86 })
            }) 
        })
        
    })
})