import { View, Text, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import React from 'react'
import { GradientHOC } from '../HOC/Gradient.hoc'
import Header from '../components/CommonHeader.component'
import { PieChart, ProgressChart } from 'react-native-chart-kit'
import { PIE_CHART, PIE_CHART_CONFIG } from '../constants/Contant'


const DashboardPage = () => {
    const screenWidth = useWindowDimensions().width
    console.log('screenWidth: ', screenWidth);

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

                <View></View>

            </View>
        </ScrollView>
    )
}

export default GradientHOC(DashboardPage)