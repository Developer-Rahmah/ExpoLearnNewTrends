import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type CustomNumber = {
  a: number
  b: number
  c?: number | string | boolean | null
  d?: gender
}

enum gender {
  mail = 1,
  female = 2
}
// in typescript : we have not var we just have let and const
let a: CustomNumber = {
  a: 1,
  b: 2,
  c: 3,
  d: gender.mail
}
// interface benfits :we can make marge  but in type we can't make mearge
interface testInterface {
  a: number
  b: number
  c?: number | string | boolean | null
  d?: gender
}
// interface testInterface{
//     e:number | string
// }
const add = function (a: testInterface): number {
  return a.a + a.b
}
const result: number = add(a)
export default function TestComponent ({
  firstName,
  lastName
}: {
  firstName?: string | number | boolean
  lastName?: string
}) {
  return (
    <View>
      <Text>
        {firstName} {lastName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
