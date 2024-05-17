import { View, Text, ScrollView, Dimensions, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { GradientHOC } from '../HOC/Gradient.hoc'
import Header from '../components/CommonHeader.component'
import { PieChart, ProgressChart } from 'react-native-chart-kit'
import { AMOUNTS_LIST, ARBITRATION_LIST, PIE_CHART, PIE_CHART_CONFIG } from '../constants/Contant'
import MarqueeText from 'react-native-marquee';
import moment from 'moment'
import { FontAwesome } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper'
const DashboardPage = () => {
    const screenWidth = useWindowDimensions().width

    const handleSearch = () => {
        console.log('te');
    }

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <Header onSearch={handleSearch} />
            <View style={{ flex: 1 }}>

                <View className='h-56 w-full flex justify-center  rounded'>

                    <ProgressChart
                        data={PIE_CHART}
                        width={screenWidth}
                        height={220}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={PIE_CHART_CONFIG}
                        hideLegend={false}
                    />
                </View>

                <View className='w-full mt-4'>
                    <MarqueeText
                        style={style.marqueeMainContainer}
                        speed={1}
                        marqueeOnStart={true}
                        loop={true}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.
                    </MarqueeText>
                </View>

                <View className='flex-row justify-center items-center mt-4'>
                    <View className='flex-row gap-2'>

                        <View className='h-60 w-44 bg-slate-500 rounded'>
                            <View className='p-3'>
                                <Text className='font-bold text-center text-white'>Amounts</Text>
                                <View className='flex-row justify-between items-center mt-3'>
                                    <Text className='text-white text-xs'>Investment</Text>
                                    <Text className='text-white text-xs'>Current Values</Text>
                                </View>
                                {AMOUNTS_LIST?.map((d, idx) =>
                                    <View className='flex-row justify-between items-center mt-3' key={idx}>
                                        <Text className='text-white text-xs'>{d?.investmentAmount}</Text>
                                        <Text className='text-white text-xs'>{d?.currentValue}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                        <View className='h-60  w-44 bg-slate-500'>
                            <View className='p-3'>
                                <Text className='font-bold text-center text-white'>Time</Text>
                                <View className='flex-row justify-between items-center mt-3'>
                                    <Text className='text-white text-xs'>Investment</Text>
                                    <Text className='text-white text-xs'>Purchase</Text>
                                </View>
                                {AMOUNTS_LIST?.map((d, idx) =>
                                    <View className='flex-row justify-between items-center mt-3' key={idx}>
                                        <Text className='text-white text-xs'>{d?.investmentAmount}</Text>
                                        <Text className='text-white text-xs'>{moment(d?.date).format('L')}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                </View>

                <DataTable className='rounded bg-slate-500 my-3'>
                    <DataTable.Header className='text-white'>
                        <DataTable.Title >
                            <Text className='text-white font-bold text-center'>
                                Pair
                            </Text>
                        </DataTable.Title>
                        <DataTable.Title >
                            <Text className='text-white font-bold text-center'>
                                Buying Price
                            </Text>

                        </DataTable.Title>
                        <DataTable.Title >
                            <Text className='text-white font-bold text-center'>
                                Selling Price
                            </Text>
                        </DataTable.Title>
                    </DataTable.Header>

                    {ARBITRATION_LIST?.map((d, idx) => (
                        <DataTable.Row key={idx} style={{ width: '100%' }} >
                            <DataTable.Cell >
                                <View className='flex-row items-center  gap-1 me-10 w-full'>

                                    <FontAwesome name="bitcoin" size={15} color="#e5f13e" />
                                    <Text className='text-white font-bold text-center '>
                                        {d?.name}
                                    </Text>
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell>

                                <View className='flex-row  items-center justify-center gap-1 w-full text-center'>

                                    <FontAwesome name="dollar" size={15} color="green" />

                                    <Text className='text-white font-bold text-left '>
                                        {d?.buyingPrice}
                                    </Text>
                                </View>

                            </DataTable.Cell>
                            <DataTable.Cell>
                                <View className='flex-row items-center justify-center  gap-1'>
                                    <FontAwesome name="dollar" size={15} color="red" />
                                    <Text className='text-white font-bold text-center '>
                                        {d?.sellingPrice}
                                    </Text>
                                </View>
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}



                </DataTable>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    marqueeMainContainer: { fontSize: 24, color: '#fff', height: 60, backgroundColor: '#08130D', textAlign: 'center', lineHeight: 60 }
})

export default GradientHOC(DashboardPage)