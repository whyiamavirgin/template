"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Popover, PopoverTrigger, PopoverContent, Skeleton, Card, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { DeleteIcon, EditIcon } from "./icons/icons"; 

export const TableSkeleton = () => {

    const t = useTranslations("Products")
    const g = useTranslations("General")


    return (
        <Table color="warning" aria-label="All Products" removeWrapper={true}>
            <TableHeader>
                <TableColumn>
                    {t('tableName')}
                </TableColumn>
                <TableColumn>
                    {t('tableCompanyName')}
                </TableColumn>
                <TableColumn>
                    {t('tableProductCategory')}
                </TableColumn>
                <TableColumn>
                    {t('tableProductCreateDate')}
                </TableColumn>
                <TableColumn>
                    {t('tableProductStatus')}
                </TableColumn>
                <TableColumn>
                    {t('tableActions')}
                </TableColumn>
            </TableHeader>
            <TableBody className="gap-10">
                <TableRow key='1'>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-3">
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow key='2'>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-3">
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow key='3'>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-3">
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow key='4'>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-6 w-3/5 rounded-lg before:!duration-1000"/>
                    </TableCell>
                    <TableCell>
                        <div className="relative flex items-center gap-3">
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                            <Skeleton className="h-6 w-1/6 rounded-lg before:!duration-1000"/>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export function MainPageProductsSkeleton() {

    const g = useTranslations("General")

    return(
        <div className="grid place-content-center mt-16 w-full m-auto">
            <Skeleton className="h-[40px] w-[300px] rounded-lg before:!duration-1000 m-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 w-full m-auto gap-3 md:gap-10 mt-10">
                <Card
                    isHoverable
                    isBlurred
                    isPressable
                    className="border-none bg-background/80 dark:bg-default-100/50 min-w-[300px] w-[350px] md:w-[450px] h-[175px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="flex h-full items-center content-center justify-evenly align-middle gap-6">
                            <Skeleton className="object-cover h-[130px] w-[100px] rounded-lg before:!duration-1000" />
                            <div className="flex flex-col pr-4 w-[220px] gap-3">
                                <Skeleton className="h-[20px] w-[200px] rounded-lg before:!duration-1000" />
                                <div className="grid grid-cols-2 gap-8 mt-2">
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card
                    isHoverable
                    isBlurred
                    isPressable
                    className="border-none bg-background/80 dark:bg-default-100/50 min-w-[300px] w-[350px] md:w-[450px] h-[175px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="flex h-full items-center content-center justify-evenly align-middle gap-6">
                            <Skeleton className="object-cover h-[130px] w-[100px] rounded-lg before:!duration-1000" />
                            <div className="flex flex-col pr-4 w-[220px] gap-3">
                                <Skeleton className="h-[20px] w-[200px] rounded-lg before:!duration-1000" />
                                <div className="grid grid-cols-2 gap-8 mt-2">
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card
                    isHoverable
                    isBlurred
                    isPressable
                    className="border-none bg-background/80 dark:bg-default-100/50 min-w-[300px] w-[350px] md:w-[450px] h-[175px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="flex h-full items-center content-center justify-evenly align-middle gap-6">
                            <Skeleton className="object-cover h-[130px] w-[100px] rounded-lg before:!duration-1000" />
                            <div className="flex flex-col pr-4 w-[220px] gap-3">
                                <Skeleton className="h-[20px] w-[200px] rounded-lg before:!duration-1000" />
                                <div className="grid grid-cols-2 gap-8 mt-2">
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card
                    isHoverable
                    isBlurred
                    isPressable
                    className="border-none bg-background/80 dark:bg-default-100/50 min-w-[300px] w-[350px] md:w-[450px] h-[175px]"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="flex h-full items-center content-center justify-evenly align-middle gap-6">
                            <Skeleton className="object-cover h-[130px] w-[100px] rounded-lg before:!duration-1000" />
                            <div className="flex flex-col pr-4 w-[220px] gap-3">
                                <Skeleton className="h-[20px] w-[200px] rounded-lg before:!duration-1000" />
                                <div className="grid grid-cols-2 gap-8 mt-2">
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Skeleton className="h-[10px] w-[40px] rounded-lg before:!duration-1000" />
                                        <Skeleton className="h-[10px] w-[100px] rounded-lg before:!duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export function CategoriesSkeleton() {
    return(
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card isBlurred isPressable>
                <Skeleton className="w-full h-64 before:!duration-1000" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Skeleton className="w-[40%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                    <br />
                    <Skeleton className="w-[85%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                </div>
            </Card>
            <Card isBlurred isPressable>
                <Skeleton className="w-full h-64 before:!duration-1000" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Skeleton className="w-[40%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                    <br />
                    <Skeleton className="w-[85%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                </div>
            </Card>
            <Card isBlurred isPressable>
                <Skeleton className="w-full h-64 before:!duration-1000" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Skeleton className="w-[40%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                    <br />
                    <Skeleton className="w-[85%] h-4 bg-neutral-400 rounded-md before:!duration-1000" />
                </div>
            </Card>
        </div>
    )
}